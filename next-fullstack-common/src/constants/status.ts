export enum RESPONSE_STATUS {
  SUCCESS = "SUCCESS",
  EMAIL_DUPLICATION_EXCEPTION = "EMAIL_DUPLICATION_EXCEPTION",
  EMAIL_VERIFICATION_EXCEPTION = "EMAIL_VERIFICATION_EXCEPTION",
  PASSWORD_VERIFICATION_EXCEPTION = "PASSWORD_VERIFICATION_EXCEPTION",
  DISPLAYNAME_DUPLICATION_EXCEPTION = "DISPLAYNAME_DUPLICATION_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION = "INTERNAL_SERVER_EXCEPTION",
  NOT_FOUND_EXCEPTION = "NOT_FOUND_EXCEPTION",
  ACCOUNT_PROVIDER_EXCEPTION = "ACCOUNT_PROVIDER_EXCEPTION",
  ACCOUNT_VERIFICATION_EXCEPTION = "ACCOUNT_VERIFICATION_EXCEPTION",
  ALREADY_AUTHENTICATED_EXCEPTION = "ALREADY_AUTHENTICATED_EXCEPTION",
  ACCOUNT_DISABLED_EXCEPTION = "ACCOUNT_DISABLED_EXCEPTION",
  TOKEN_EXPIRED_EXCEPTION = "TOKEN_EXPIRED_EXCEPTION",
  REFRESH_TOKEN_EXPIRED_EXCEPTION = "REFRESH_TOKEN_EXPIRED_EXCEPTION",
  TOKEN_NOT_FOUND_EXCEPTION = "TOKEN_NOT_FOUND_EXCEPTION",
}

export const processStatus = (responseStatus: RESPONSE_STATUS, toast: any) => {
  switch (responseStatus) {
    case RESPONSE_STATUS.SUCCESS:
      toast({
        variant: "default",
        title: "OK",
      });
      return true;
    case RESPONSE_STATUS.EMAIL_DUPLICATION_EXCEPTION: {
      toast({
        variant: "destructive",
        title: "중복된 계정이 존재합니다",
        description: "다시 입력해주세요.",
      });
      return false;
    }
    case RESPONSE_STATUS.NOT_FOUND_EXCEPTION: {
      toast({
        variant: "destructive",
        title: "존재하지 않는 계정입니다",
        description: "다시 입력해주세요.",
      });
      return false;
    }
    case RESPONSE_STATUS.PASSWORD_VERIFICATION_EXCEPTION: {
      toast({
        variant: "destructive",
        title: "비밀번호가 일치하지 않습니다",
        description: "다시 입력해주세요.",
      });
      return false;
    }
    default:
      toast({
        variant: "destructive",
        title: "알 수 없는 오류가 발생했습니다",
        description: "다시 시도해주세요.",
      });
      return false;
  }
};
