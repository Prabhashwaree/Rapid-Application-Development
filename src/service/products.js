import axios from "../axios";

class products{
    postProducts = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('products', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };



        GetProducts = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('products')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        deleteProducts = async (params) => {
            const promise = new Promise((resolve, reject) => {
               axios.delete('products', {params: params})
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
export default  new products();