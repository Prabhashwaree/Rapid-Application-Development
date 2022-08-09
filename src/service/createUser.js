import axios from "../axios";

class createUser{
    postCreateUser = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('users', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetCreateUser = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('users')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteCreateUser = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('users/'+ params,)
               .then((res) => {
                   return resolve(res)
               }) 
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };



       PutCreateUser  = async (data,id) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('users/'+id, data)
           .then((res) => {
               return resolve(res)
           })
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };


}
export default  new createUser();