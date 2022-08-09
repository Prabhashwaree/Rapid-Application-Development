import axios from "../axios";

class cart{
    postCart = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('carts', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetCarts = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('carts')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteCarts = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('carts', {params: params})
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
export default  new cart();