export const CONFIG = {
    apiKey: "AIzaSyBkZ0SKxQ8dk8-u6rUcLk9WDx8_sQEsEhA",
    authDomain: "app-test-1927.firebaseapp.com",
    databaseURL: "https://app-test-1927.firebaseio.com",
    projectId: "app-test-1927",
    storageBucket: "",
    messagingSenderId: "46317777632",
    appId: "1:46317777632:web:9cb02eff326e2c2f"
  };

  export const convertArray = value => {
      let vArray = [];
      value.forEach(element => {
        let item = element.val();
        item.key = element.key;
        vArray.push(item);
      });
      return vArray;
  }