// import http from"./interceptor/AxiosInterceptor.js";
import http from "./interceptor/AxiosInterceptorJSON"
export default class NewService
{
    create(data){
        console.log("add user service",data);
       return http.post("/actualites",data)

    }
    getAll(){
        return http.get("/actualites");

    }
    remove(id){
        return http.delete("/actualites/" +id);


    }
    update(id,data){
        console.log("id in service",id);
        console.log("data in service",data);
        return http.put("/actualites/"+id,data);

    }
    findByid(id) {
        console.log("id in service",id);

        return http.get("/actualites/" + id); // Use a server-side endpoint
    }
    

    // login(data){
    //     console.log("data in service",data);
    //     return http.post("/auth/signin/"+data);
    // }
}
