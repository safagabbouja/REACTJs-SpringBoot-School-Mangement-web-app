// import http from"./interceptor/AxiosInterceptor.js";
import http from "./interceptor/AxiosInterceptorJSON"
export default class CourService
{
    create(data){
        console.log("add cour service",data);
       return http.post("/cours",data)

    }
    getAll(){
        return http.get("/cours");

    }
    remove(id){
        return http.delete("/cours/" +id);


    }
    update(id,data){
        console.log("id in service",id);
        console.log("data in service",data);
        return http.put("/cours/"+id,data);

    }
    findByid(id) {
        console.log("id in service",id);

        return http.get("/cours/" + id); // Use a server-side endpoint
    }
    

   
}
