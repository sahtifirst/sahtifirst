import { create } from 'zustand';
    import supabase from './supabase';

    // Define a function to get the list of Algerian wilayas
    const getAlgerianWilayas = () => [
      'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Algiers', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naama', 'Aïn Témouchent', 'Ghardaïa', 'Relizane'
    ];

    // Translation object (French and Arabic)
    const translations = {
      fr: {
        "Registration": "Inscription",
        "Full Name": "Nom complet",
        "Phone Number": "Numéro de téléphone",
        "Password": "Mot de passe",
        "Age": "Âge",
        "Select Wilaya": "Sélectionnez une Wilaya",
        "Patient": "Patient",
        "Healthcare Provider": "Prestataire de santé",
        "Select Type": "Sélectionnez le type",
        "Doctor": "Médecin",
        "Nurse": "Infirmier/Infirmière",
        "Select Specialty": "Sélectionnez une spécialité",
        "Register": "S'inscrire",
        "Login": "Connexion",
        "Don't have an account?": "Vous n'avez pas de compte ?",
        "Invalid credentials or role": "Identifiants ou rôle invalides",
        "Admin": "Administrateur",
        "Patient Dashboard": "Tableau de bord du patient",
        "Send Request": "Envoyer une demande",
        "Request sent!": "Demande envoyée !",
        "Provider Dashboard": "Tableau de bord du prestataire",
        "Availability": "Disponibilité",
        "Notifications": "Notifications",
        "A patient requires your services, Doctor.": "Un patient a besoin de vos services, Docteur.",
        "Accept": "Accepter",
        "Attended Patients": "Patients traités",
        "Close Consultation": "Terminer la consultation",
        "Ranking": "Classement",
        "Rate": "Noter",
        "Submit Rating": "Soumettre la note",
        "Admin Panel": "Panneau d'administration",
        "Pending Provider Applications": "Demandes de prestataires en attente",
        "Actions": "Actions",
        "Approve": "Approuver",
        "Reject": "Rejeter",
        "Patients": "Patients",
        "Address": "Adresse",
        "Delete": "Supprimer",
        "Healthcare Providers": "Prestataires de santé",
        "Type": "Type",
        "Specialty": "Spécialité",
        "Rating": "Note",
        "Not Rated Yet": "Pas encore noté",
        "Patient Request History": "Historique des demandes des patients",
        "Date": "Date",
        "Provider": "Prestataire",
        "Provider History": "Historique des prestataires",
        "Provider Name": "Nom du prestataire",
        "Action": "Action",
        "Details": "Détails",
        "Became Available": "Est devenu disponible",
        "Became Unavailable": "Est devenu indisponible",
        "Accepted Request": "A accepté la demande",
        "Approved": "Approuvé",
        "Rejected": "Rejeté",
        "Cardiology": "Cardiologie",
        "Dermatology": "Dermatologie",
        "Endocrinology": "Endocrinologie",
        "Gastroenterology": "Gastro-entérologie",
        "General Surgery": "Chirurgie générale",
        "Internal Medicine": "Médecine interne",
        "Neurology": "Neurologie",
        "Obstetrics and Gynecology": "Gynécologie obstétrique",
        "Oncology": "Oncologie",
        "Ophthalmology": "Ophtalmologie",
        "Orthopedics": "Orthopédie",
        "Otolaryngology (ENT)": "ORL (Oto-rhino-laryngologie)",
        "Pediatrics": "Pédiatrie",
        "Psychiatry": "Psychiatrie",
        "Pulmonology": "Pneumologie",
        "Radiology": "Radiologie",
        "Urology": "Urologie",
        "Anesthesiology Nurse": "Infirmier en anesthésiologie",
        "Cardiology Nurse": "Infirmier en cardiologie",
        "Emergency Nurse": "Infirmier urgentiste",
        "Geriatric Nurse": "Infirmier en gériatrie",
        "Intensive Care Nurse": "Infirmier en soins intensifs",
        "Neonatal Nurse": "Infirmier en néonatalogie",
        "Obstetrics Nurse": "Infirmière en obstétrique",
        "Oncology Nurse": "Infirmier en oncologie",
        "Pediatric Nurse": "Infirmier en pédiatrie",
        "Psychiatric Nurse": "Infirmier en psychiatrie",
        "Surgical Nurse": "Infirmier en chirurgie",
        "Dental": "Dentisterie",
        "Rheumatology": "Rhumatologie",
        "Aesthetic Medicine": "Médecine esthétique",
        "Podiatry": "Podologie",
        "Medical Analysis Laboratory": "Laboratoire d'analyses médicales",
        "Digestive Surgery": "Chirurgie digestive",
        "Psychotherapy": "Psychothérapie",
        "Paramedical": "Paramédical",
        "Physiotherapy": "Kinésithérapie",
        "Speech Therapy": "Orthophonie",
        "Optometry": "Orthoptie",
        "Osteopathy": "Ostéopathie",
        "Functional Rehabilitation": "Rééducation fonctionnelle",
        "Nutrition": "Nutrition",
        "Psychology": "Psychologie",
        "Blood Sampling": "Prélèvement sanguin",
        "Probe Change": "Changement de sonde",
        "Oxygen Therapy": "Oxygénothérapie",
        "Sahti First": "Sahti d'abord"
      },
      ar: {
        "Registration": "التسجيل",
        "Full Name": "الاسم الكامل",
        "Phone Number": "رقم الهاتف",
        "Password": "كلمة المرور",
        "Age": "العمر",
        "Select Wilaya": "اختر ولاية",
        "Patient": "مريض",
        "Healthcare Provider": "مقدم الرعاية الصحية",
        "Select Type": "اختر نوع",
        "Doctor": "طبيب",
        "Nurse": "ممرض / ممرضة",
        "Select Specialty": "اختر التخصص",
        "Register": "تسجيل",
        "Login": "تسجيل الدخول",
        "Don't have an account?": "ليس لديك حساب؟",
        "Invalid credentials or role": "بيانات اعتماد أو دور غير صالح",
        "Admin": "مشرف",
        "Patient Dashboard": "لوحة تحكم المريض",
        "Send Request": "إرسال طلب",
        "Request sent!": "تم إرسال الطلب!",
        "Provider Dashboard": "لوحة تحكم مقدم الخدمة",
        "Availability": "التوفر",
        "Notifications": "الإشعارات",
        "A patient requires your services, Doctor.": "مريض يحتاج إلى خدماتك يا دكتور.",
        "Accept": "قبول",
        "Attended Patients": "المرضى المعالجين",
        "Close Consultation": "إنهاء الاستشارة",
        "Ranking": "الترتيب",
        "Rate": "تقييم",
        "Submit Rating": "إرسال التقييم",
        "Admin Panel": "لوحة تحكم المشرف",
        "Pending Provider Applications": "طلبات مقدمي الخدمات المعلقة",
        "Actions": "الإجراءات",
        "Approve": "موافقة",
        "Reject": "رفض",
        "Patients": "المرضى",
        "Address": "العنوان",
        "Delete": "حذف",
        "Healthcare Providers": "مقدمو الرعاية الصحية",
        "Type": "النوع",
        "Specialty": "التخصص",
        "Rating": "التقييم",
        "Not Rated Yet": "لم يتم التقييم بعد",
        "Patient Request History": "سجل طلبات المرضى",
        "Date": "التاريخ",
        "Provider": "مقدم الخدمة",
        "Provider History": "سجل مقدمي الخدمات",
        "Provider Name": "اسم مقدم الخدمة",
        "Action": "الإجراء",
        "Details": "التفاصيل",
        "Became Available": "أصبح متاحًا",
        "Became Unavailable": "أصبح غير متاح",
        "Accepted Request": "تم قبول الطلب",
        "Approved": "تمت الموافقة",
        "Rejected": "مرفوض",
        "Cardiology": "طب القلب",
        "Dermatology": "طب الجلد",
        "Endocrinology": "طب الغدد الصماء",
        "Gastroenterology": "طب الجهاز الهضمي",
        "General Surgery": "الجراحة العامة",
        "Internal Medicine": "الطب الباطني",
        "Neurology": "طب الأعصاب",
        "Obstetrics and Gynecology": "طب النساء والتوليد",
        "Oncology": "طب الأورام",
        "Ophthalmology": "طب العيون",
        "Orthopedics": "طب العظام",
        "Otolaryngology (ENT)": "طب الأنف والأذن والحنجرة",
        "Pediatrics": "طب الأطفال",
        "Psychiatry": "الطب النفسي",
        "Pulmonology": "طب الرئة",
        "Radiology": "طب الأشعة",
        "Urology": "طب المسالك البولية",
        "Anesthesiology Nurse": "ممرض تخدير",
        "Cardiology Nurse": "ممرض أمراض القلب",
        "Emergency Nurse": "ممرض طوارئ",
        "Geriatric Nurse": "ممرض رعاية المسنين",
        "Intensive Care Nurse": "ممرض العناية المركزة",
        "Neonatal Nurse": "ممرض حديثي الولادة",
        "Obstetrics Nurse": "ممرضة توليد",
        "Oncology Nurse": "ممرض أورام",
        "Pediatric Nurse": "ممرض أطفال",
        "Psychiatric Nurse": "ممرض نفسي",
        "Surgical Nurse": "ممرض جراحي",
        "Dental": "طب الأسنان",
        "Rheumatology": "طب الروماتيزم",
        "Aesthetic Medicine": "الطب التجميلي",
        "Podiatry": "طب الأقدام",
        "Medical Analysis Laboratory": "مختبر التحاليل الطبية",
        "Digestive Surgery": "جراحة الجهاز الهضمي",
        "Psychotherapy": "العلاج النفسي",
        "Paramedical": "المهن الطبية المساعدة",
        "Physiotherapy": "العلاج الطبيعي",
        "Speech Therapy": "علاج النطق",
        "Optometry": "قياس البصر",
        "Osteopathy": "تقويم العظام",
        "Functional Rehabilitation": "إعادة التأهيل الوظيفي",
        "Nutrition": "التغذية",
        "Psychology": "علم النفس",
        "Blood Sampling": "سحب الدم",
        "Probe Change": "تغيير القسطرة",
        "Oxygen Therapy": "العلاج بالأكسجين",
        "Sahti First": "صحتي أولاً"
      }
    };

    const useStore = create((set) => ({
      users: [
        {
          id: '9999', // Special ID for the default admin user
          fullName: 'Admin User',
          phoneNumber: '0000000000',
          password: 'adminpassword', // In a real app, hash the password!
          age: 30,
          wilaya: 'Algiers',
          role: 'admin',
        },
      ],
      pendingProviders: [],
      notifications: [],
      attendedPatients: [],
      providerHistory: [],
      wilayas: getAlgerianWilayas(),
      specialties: {
        doctor: [
          'Cardiology',
          'Dermatology',
          'Endocrinology',
          'Gastroenterology',
          'General Surgery',
          'Internal Medicine',
          'Neurology',
          'Obstetrics and Gynecology',
          'Oncology',
          'Ophthalmology',
          'Orthopedics',
          'Otolaryngology (ENT)',
          'Pediatrics',
          'Psychiatry',
          'Pulmonology',
          'Radiology',
          'Urology',
          'Dental',
          'Rheumatology',
          'Aesthetic Medicine',
          'Podiatry',
          'Medical Analysis Laboratory',
          'Digestive Surgery',
          'Psychotherapy'
        ],
        nurse: [
          'Anesthesiology Nurse',
          'Cardiology Nurse',
          'Emergency Nurse',
          'Geriatric Nurse',
          'Intensive Care Nurse',
          'Neonatal Nurse',
          'Obstetrics Nurse',
          'Oncology Nurse',
          'Pediatric Nurse',
          'Psychiatric Nurse',
          'Surgical Nurse',
          'Paramedical',
          'Physiotherapy',
          'Speech Therapy',
          'Optometry',
          'Osteopathy',
          'Functional Rehabilitation',
          'Nutrition',
          'Psychology',
          'Blood Sampling',
          'Probe Change',
          'Oxygen Therapy'
        ],
      },
      language: 'fr', // Default language is French
      setLanguage: (lang) => set({ language: lang }),
      t: (key) => translations[useStore.getState().language][key],
      user: null,

      // Fetch initial data from Supabase
      async initializeStore() {
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*');
        if (usersError) {
          console.error('Error fetching users:', usersError);
        }

        const { data: pendingProviders, error: pendingProvidersError } = await supabase
          .from('pending_providers')
          .select('*');
        if (pendingProvidersError) {
          console.error('Error fetching pending providers:', pendingProvidersError);
        }

        const { data: attendedPatients, error: attendedPatientsError } = await supabase
          .from('attended_patients')
          .select('*');
        if (attendedPatientsError) {
          console.error('Error fetching attended patients:', attendedPatientsError);
        }

        const { data: providerHistory, error: providerHistoryError } = await supabase
          .from('provider_history')
          .select('*');
        if (providerHistoryError) {
          console.error('Error fetching provider history:', providerHistoryError);
        }

        set({
          users: users || [],
          pendingProviders: pendingProviders || [],
          attendedPatients: attendedPatients || [],
          providerHistory: providerHistory || [],
        });
      },

      registerUser: async (userData) => {
        const { data, error } = await supabase.auth.signUp({
          email: userData.phoneNumber + '@sahtifirst.com', // Create a dummy email for now
          password: userData.password,
          options: {
            data: {
              full_name: userData.fullName,
              phone_number: userData.phoneNumber,
              age: userData.age,
              wilaya: userData.wilaya,
              role: userData.role,
              provider_type: userData.providerType,
              specialty: userData.specialty,
            }
          }
        });
      
        if (error) {
          console.error('Error during registration:', error);
          throw error;
        }
      
        if (userData.role === 'provider') {
          const { error: insertError } = await supabase
            .from('pending_providers')
            .insert([
              {
                id: data.user.id, // Use Supabase auth user ID
                full_name: userData.fullName,
                phone_number: userData.phoneNumber,
                age: userData.age,
                wilaya: userData.wilaya,
                role: userData.role,
                provider_type: userData.providerType,
                specialty: userData.specialty,
              },
            ]);
      
          if (insertError) {
            console.error('Error adding provider to pending_providers:', insertError);
            throw insertError;
          }
        } else if (userData.role === 'patient' || userData.role === 'admin') {
          const { error: insertError } = await supabase
            .from('users')
            .insert([
              {
                id: data.user.id, // Use Supabase auth user ID
                full_name: userData.fullName,
                phone_number: userData.phoneNumber,
                age: userData.age,
                wilaya: userData.wilaya,
                role: userData.role,
              },
            ]);
      
          if (insertError) {
            console.error('Error adding user to users:', insertError);
            throw insertError;
          }
        }
      
        return data;
      },

      loginUser: async (phoneNumber, password, role) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: phoneNumber + '@sahtifirst.com', // Use the dummy email format
          password: password,
        });
      
        if (error) {
          console.error('Error during login:', error);
          throw error;
        }
      
        if (data.user) {
          // Fetch user data based on the role
          let user = null;
          if (role === 'provider') {
            const { data: providerData, error: providerError } = await supabase
              .from('users')
              .select('*')
              .eq('id', data.user.id)
              .eq('role', 'provider')
              .single();
      
            if (providerError) {
              console.error('Error fetching provider data:', providerError);
              throw providerError;
            }
            user = providerData;
          } else {
            const { data: userData, error: userError } = await supabase
              .from('users')
              .select('*')
              .eq('id', data.user.id)
              .eq('role', role)
              .single();
      
            if (userError) {
              console.error('Error fetching user data:', userError);
              throw userError;
            }
            user = userData;
          }
      
          if (user) {
            set({ user });
            return user;
          } else {
            throw new Error('User not found or not approved.');
          }
        }
      
        return null;
      },

      sendRequest: async (patient, providerType, specialty) => {
        // Fetch available providers from Supabase
        const { data: availableProviders, error } = await supabase
          .from('users')
          .select('*')
          .eq('role', 'provider')
          .eq('provider_type', providerType)
          .eq('specialty', specialty)
          .eq('wilaya', patient.wilaya)
          .eq('is_available', true);
      
        if (error) {
          console.error('Error fetching available providers:', error);
          throw error;
        }
      
        if (availableProviders.length === 0) {
          console.warn('No available providers found for this specialty and wilaya.');
          return; // Or handle it in another appropriate way
        }
      
        // Create new notifications for each available provider
        const newNotifications = availableProviders.map((provider) => ({
          provider_id: provider.id,
          patient_id: patient.id,
          message: `New request from ${patient.full_name} for ${specialty}`,
        }));
      
        const { error: insertError } = await supabase
          .from('notifications')
          .insert(newNotifications);
      
        if (insertError) {
          console.error('Error inserting new notifications:', insertError);
          throw insertError;
        }
      
        // Update the store state
        set((state) => ({
          notifications: [...state.notifications, ...newNotifications],
        }));
      },

      toggleAvailability: async () => {
        set((state) => {
          const updatedUser = state.user
            ? { ...state.user, is_available: !state.user.is_available }
            : null;
      
          if (updatedUser) {
            const historyEntry = {
              id: Date.now(),
              providerId: updatedUser.id,
              providerName: updatedUser.full_name,
              date: new Date().toLocaleDateString(),
              action: updatedUser.is_available
                ? 'Became Available'
                : 'Became Unavailable',
              details: `Provider ${updatedUser.full_name} ${
                updatedUser.is_available ? 'is now available' : 'is now unavailable'
              }`,
            };
      
            // Update availability in Supabase
            supabase
              .from('users')
              .update({ is_available: updatedUser.is_available })
              .eq('id', updatedUser.id)
              .then(({ error }) => {
                if (error) {
                  console.error('Error updating availability:', error);
                }
              });
      
            // Add history entry in Supabase
            supabase
              .from('provider_history')
              .insert([historyEntry])
              .then(({ error }) => {
                if (error) {
                  console.error('Error adding provider history entry:', error);
                }
              });
      
            return {
              user: updatedUser,
              providerHistory: [...state.providerHistory, historyEntry],
            };
          }
      
          return {};
        }),
      },

      acceptRequest: async (request) => {
        const { data: patientData, error: patientError } = await supabase
          .from('users')
          .select('*')
          .eq('id', request.patientId)
          .single();
      
        if (patientError) {
          console.error('Error fetching patient data:', patientError);
          throw patientError;
        }
      
        const { data: providerData, error: providerError } = await supabase
          .from('users')
          .select('*')
          .eq('id', request.providerId)
          .single();
      
        if (providerError) {
          console.error('Error fetching provider data:', providerError);
          throw providerError;
        }
      
        // Add an entry to the attended_patients table
        const attendedPatient = {
          patient_id: request.patientId,
          provider_id: request.providerId,
          provider_name: providerData.full_name,
          date: new Date().toLocaleDateString(),
          rating: null, // Initially, the rating is null
        };
      
        const { error: attendedError } = await supabase
          .from('attended_patients')
          .insert([attendedPatient]);
      
        if (attendedError) {
          console.error('Error adding attended patient:', attendedError);
          throw attendedError;
        }
      
        // Remove the notification for this request from all providers
        const { error: deleteError } = await supabase
          .from('notifications')
          .delete()
          .eq('patient_id', request.patientId);
      
        if (deleteError) {
          console.error('Error deleting notifications:', deleteError);
          throw deleteError;
        }
      
        // Add an entry to the provider history
        const historyEntry = {
          providerId: providerData.id,
          providerName: providerData.full_name,
          date: new Date().toLocaleDateString(),
          action: 'Accepted Request',
          details: `Provider ${providerData.full_name} accepted a request from ${patientData.full_name}`,
        };
      
        const { error: historyError } = await supabase
          .from('provider_history')
          .insert([historyEntry]);
      
        if (historyError) {
          console.error('Error adding provider history entry:', historyError);
          throw historyError;
        }
      
        // Update the store state
        set((state) => ({
          attendedPatients: [...state.attendedPatients, attendedPatient],
          notifications: state.notifications.filter((n) => n.patientId !== request.patientId),
          providerHistory: [...state.providerHistory, historyEntry],
        }));
      },

      approveProvider: async (providerId) => {
        // Fetch the provider from pending_providers
        const { data: provider, error: fetchError } = await supabase
          .from('pending_providers')
          .select('*')
          .eq('id', providerId)
          .single();
      
        if (fetchError) {
          console.error('Error fetching provider:', fetchError);
          throw fetchError;
        }
      
        if (!provider) {
          console.error('Provider not found in pending_providers');
          return;
        }
      
        // Add the provider to the users table
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            {
              ...provider,
              is_available: false, // Set initial availability to false
            },
          ]);
      
        if (insertError) {
          console.error('Error adding provider to users:', insertError);
          throw insertError;
        }
      
        // Remove the provider from pending_providers
        const { error: deleteError } = await supabase
          .from('pending_providers')
          .delete()
          .eq('id', providerId);
      
        if (deleteError) {
          console.error('Error removing provider from pending_providers:', deleteError);
          throw deleteError;
        }
      
        // Add an entry to the provider history
        const historyEntry = {
          providerId: provider.id,
          providerName: provider.full_name,
          date: new Date().toLocaleDateString(),
          action: 'Approved',
          details: `Provider ${provider.full_name}'s application was approved`,
        };
      
        const { error: historyError } = await supabase
          .from('provider_history')
          .insert([historyEntry]);
      
        if (historyError) {
          console.error('Error adding provider history entry:', historyError);
          throw historyError;
        }
      
        // Update the store state
        set((state) => ({
          users: [...state.users, provider],
          pendingProviders: state.pendingProviders.filter((p) => p.id !== providerId),
          providerHistory: [...state.providerHistory, historyEntry],
        }));
      },

      rejectProvider: async (providerId) => {
        // Fetch the provider from pending_providers
        const { data: provider, error: fetchError } = await supabase
          .from('pending_providers')
          .select('full_name')
          .eq('id', providerId)
          .single();
      
        if (fetchError) {
          console.error('Error fetching provider:', fetchError);
          throw fetchError;
        }
      
        if (!provider) {
          console.error('Provider not found in pending_providers');
          return;
        }
      
        // Remove the provider from pending_providers
        const { error: deleteError } = await supabase
          .from('pending_providers')
          .delete()
          .eq('id', providerId);
      
        if (deleteError) {
          console.error('Error removing provider from pending_providers:', deleteError);
          throw deleteError;
        }
      
        // Add an entry to the provider history
        const historyEntry = {
          providerId: providerId,
          providerName: provider.full_name,
          date: new Date().toLocaleDateString(),
          action: 'Rejected',
          details: `Provider ${provider.full_name}'s application was rejected`,
        };
      
        const { error: historyError } = await supabase
          .from('provider_history')
          .insert([historyEntry]);
      
        if (historyError) {
          console.error('Error adding provider history entry:', historyError);
          throw historyError;
        }
      
        // Update the store state
        set((state) => ({
          pendingProviders: state.pendingProviders.filter((p) => p.id !== providerId),
          providerHistory: [...state.providerHistory, historyEntry],
        }));
      },

      deleteUser: async (userId) => {
        // Delete the user from the users table
        const { error: deleteError } = await supabase
          .from('users')
          .delete()
          .eq('id', userId);
      
        if (deleteError) {
          console.error('Error deleting user:', deleteError);
          throw deleteError;
        }
      
        // Update the store state
        set((state) => ({
          users: state.users.filter((user) => user.id !== userId),
        }));
      },
    }));

    export default useStore;
