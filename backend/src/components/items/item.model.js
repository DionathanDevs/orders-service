class Item {
  constructor(description, ncm, requesting_user, organization, active = true) {
    this.description = description;
    this.ncm = ncm;
    this.requesting_user = requesting_user;
    this.organization = organization;
    this.active = active;
  }
}

export default Item;
