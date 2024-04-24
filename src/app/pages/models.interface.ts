export interface Cours{
  name: string;
  coursId: number,
  startDate: string;
  endDate: string;
  etudiants: etudiant[]
}
export interface etudiant{
  name: string;
  studendId?: number,
  email?: string;
  password?: string;
  username?: string
  coursId?: number
}
