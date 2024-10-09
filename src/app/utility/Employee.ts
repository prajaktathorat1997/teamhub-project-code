export interface Employee {
  name: string;
  mobileNo: string;

  emailId: string;
  dept: string;

  status: string;

  createdDate: number;
  updatedBy: string | null;
  createdBy: string | null;
  updatedDate: number;
  salary: number;
  country: {
    cid: number;
    cname: string;
  };
}
