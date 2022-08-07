import axios from "../axios";

class createUser{
    postCreateUser = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('CreateUser', data)    // 20s
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
                axios.get('CreateUser')
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
               axios.delete('CreateUser', {params: params})
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