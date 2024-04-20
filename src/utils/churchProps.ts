type ChurchProps = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  hours: string;
  contact: {
    church_email: string;
    church_whatsapp: string;
    church_phone: string;
  };
  staff: [
    {
      church_staff_group: {
        church_staff_group_person_name: string;
        church_staff_group_person_job: string;
      };
    }
  ];
  socialMedia: {
    church_facebook: string;
    church_instagram: string;
    church_linkedin: string;
    church_youtube: string;
  };
  logo: string;
  coverImg: string;
  totalFollowers: number;
};

export default ChurchProps;
