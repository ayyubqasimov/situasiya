export enum Roles {
  USER = "user",
  ACCOUNTABLE = "accountable",
  RESEARCHER = "researcher",
  CURATOR = "curator",
  CENTER_MANAGER = "center_manager",
  CHIEF = "chief",
}

export const roleNames = {
  [Roles.USER]: "İstifadəçi",
  [Roles.ACCOUNTABLE]: "Məsul Şəxs",
  [Roles.RESEARCHER]: "Araşdırmaçı",
  [Roles.CURATOR]: "Kurator",
  [Roles.CENTER_MANAGER]: "Mərkəz Direktoru",
  [Roles.CHIEF]: "Rəhbər",
};