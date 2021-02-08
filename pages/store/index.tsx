// const Dogs: React.FC<DogsProps> = ({res}: any) => {
//     const router = useRouter()
//     if(router.isFallback) return <div>loading...</div>
//     return <div>{JSON.stringify(res)}</div>;
//     }
    
    
//     // server
//     export const getStaticPaths = async () => {
    
//         return {
//             paths: [
                
//             ],
//             fallback: true
//         }
//     }
//     export const getStaticProps = async ({params}) => {
//         console.log(params)
//         const sleep = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));
//         await sleep(3000)
//         const res = data.find(dog => dog.id === params.id)
    
//         return {
//             props: {
//                res
//             },
//             revalidate: 20
//         }
//     }
//     export default Dogs;