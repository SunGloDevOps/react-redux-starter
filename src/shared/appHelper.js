class AppHelper {
  static getRoute () {
      return "this is route"
  }
  
  static getNavigationItems = {
    TopNav:[
      {id: "1", path: "/home", label: "Home", withAuth: true},
      {id: "2" ,path: "/about", label: "About Us", withAuth: true},
      {id: "3", path: "/contact", label: "Contacts", withAuth: true}
    ],
    LeftNav: [

    ]
  }
}

export default AppHelper