import { createApp } from './imports.js';

function main(){
  console.log("Inside the Main js");
  const app = createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  })
  
  app.mount('#app')
}

main();

