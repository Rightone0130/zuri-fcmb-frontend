export interface LoanListingTypes {
  _id: string;
  lender: {
    _id: string;
    profilePhotoUrl: string;
  };
  amount: number;
  duration: string; //to be changed to date after mvp
  interestRate: number;
  yieldAmount?: number;
  dueDate?: string;
  type?: "Short Term" | "Long Term";
  status?: "active" | "completed";
}

export interface transactionHistoryTypes {
  _id: string;
  borrower: string;
  lender: {
    _id: string;
    firstName: string;
    lastname: string;
  };
  loanOffer: {
    _id: string;
    amount: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface MyProfileTypes {
  email: string;
  password: string;
  firstName: string;
  lastname: string;
  profilePhotoUrl: string;
  bvn: number;
  bvnStatus: boolean;
  profileType: "borrower" | "lender";
  token: string;
  totalLoanDisbursed: number; //new
  availableBalance: number; //new
  transactionHistory: transactionHistoryTypes[];
}
