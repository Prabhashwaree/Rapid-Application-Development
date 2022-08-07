import axios from "../axios";

class login{
    postSignIn = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('UserLogin', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetSignIn = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('UserLogin')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteSignIn = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('UserLogin', {params: params})
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
export default  new login();