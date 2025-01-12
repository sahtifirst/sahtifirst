import { create } from 'zustand';

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
          id: 9999, // Special ID for the default admin user
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
      registerUser: (userData) => {
        if (userData.role === 'provider') {
          // Add provider to pendingProviders
          set((state) => ({
            pendingProviders: [
              ...state.pendingProviders,
              {
                ...userData,
                id: Date.now(),
                isAvailable: false,
              },
            ],
          }));
        } else {
          // Add other users (patients, admin) to users
          set((state) => ({
            users: [
              ...state.users,
              {
                ...userData,
                id: Date.now(),
              },
            ],
          }));
        }
      },
      loginUser: (phoneNumber, password, role) => {
        const { users, pendingProviders } = useStore.getState();
        let user = null;

        if (role === 'provider') {
          // Check if the provider is approved
          user = users.find(
            (u) => u.phoneNumber === phoneNumber && u.password === password && u.role === role
          );
        } else {
          // For patients and admin, check the users array directly
          user = users.find(
            (u) => u.phoneNumber === phoneNumber && u.password === password && u.role === role
          );
        }

        if (user) {
          set({ user });
        }

        return user;
      },
      sendRequest: (patient, providerType, specialty) =>
        set((state) => {
          const availableProviders = state.users.filter(
            (provider) =>
              provider.role === 'provider' &&
              provider.providerType === providerType &&
              provider.specialty === specialty &&
              provider.wilaya.includes(patient.wilaya) && // Filter by wilaya
              provider.isAvailable
          );
          const newNotifications = availableProviders.map((provider) => ({
            id: Date.now(),
            providerId: provider.id,
            patientId: patient.id,
            message: `New request from ${patient.fullName} for ${specialty}`,
          }));
          return {
            notifications: [...state.notifications, ...newNotifications],
          };
        }),
      toggleAvailability: () =>
        set((state) => {
          const updatedUser = state.user
            ? { ...state.user, isAvailable: !state.user.isAvailable }
            : null;

          if (updatedUser) {
            const historyEntry = {
              id: Date.now(),
              providerId: updatedUser.id,
              providerName: updatedUser.fullName,
              date: new Date().toLocaleDateString(),
              action: updatedUser.isAvailable
                ? 'Became Available'
                : 'Became Unavailable',
              details: `Provider ${updatedUser.fullName} ${
                updatedUser.isAvailable ? 'is now available' : 'is now unavailable'
              }`,
            };

            return {
              user: updatedUser,
              providerHistory: [...state.providerHistory, historyEntry],
            };
          }

          return {};
        }),
      acceptRequest: (request) =>
        set((state) => {
          const patient = state.users.find((u) => u.id === request.patientId);
          const provider = state.users.find((u) => u.id === request.providerId);

          // Remove the notification for this request from all providers
          const updatedNotifications = state.notifications.filter(
            (n) => n.patientId !== request.patientId
          );

          const attendedPatient = {
            ...patient,
            provider: provider.fullName,
            date: new Date().toLocaleDateString(),
            rating: null,
          };

          // Add an entry to the provider history
          const historyEntry = {
            id: Date.now(),
            providerId: provider.id,
            providerName: provider.fullName,
            date: new Date().toLocaleDateString(),
            action: 'Accepted Request',
            details: `Provider ${provider.fullName} accepted a request from ${patient.fullName}`,
          };

          return {
            attendedPatients: [...state.attendedPatients, attendedPatient],
            notifications: updatedNotifications,
            providerHistory: [...state.providerHistory, historyEntry],
          };
        }),
      approveProvider: (providerId) =>
        set((state) => {
          const providerIndex = state.pendingProviders.findIndex(
            (p) => p.id === providerId
          );
          if (providerIndex === -1) return {};

          const providerToApprove = state.pendingProviders[providerIndex];
          const updatedPendingProviders = state.pendingProviders.filter(
            (p) => p.id !== providerId
          );
          const updatedUsers = [...state.users, providerToApprove];

          // Add an entry to the provider history
          const historyEntry = {
            id: Date.now(),
            providerId: providerToApprove.id,
            providerName: providerToApprove.fullName,
            date: new Date().toLocaleDateString(),
            action: 'Approved',
            details: `Provider ${providerToApprove.fullName}'s application was approved`,
          };

          return {
            users: updatedUsers,
            pendingProviders: updatedPendingProviders,
            providerHistory: [...state.providerHistory, historyEntry],
          };
        }),

      rejectProvider: (providerId) =>
        set((state) => {
          const providerToReject = state.pendingProviders.find(
            (p) => p.id === providerId
          );
          if (!providerToReject) return {};

          const updatedPendingProviders = state.pendingProviders.filter(
            (p) => p.id !== providerId
          );

          // Add an entry to the provider history
          const historyEntry = {
            id: Date.now(),
            providerId: providerToReject.id,
            providerName: providerToReject.fullName,
            date: new Date().toLocaleDateString(),
            action: 'Rejected',
            details: `Provider ${providerToReject.fullName}'s application was rejected`,
          };

          return {
            pendingProviders: updatedPendingProviders,
            providerHistory: [...state.providerHistory, historyEntry],
          };
        }),
      deleteUser: (userId) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== userId),
        })),
    }));

    export default useStore;
