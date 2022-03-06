export default class User {
  constructor(user) {
    this.id = user?.id ?? null
    this.name = user?.name ?? null
    this.birthdate = user?.birthdate ?? null
    this.gender = user?.gender ?? null
  }
}