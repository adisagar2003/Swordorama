
async function main(){

    const deployer = await  ethers.getSigners();
    console.log('Deploying contracts with the same account',deployer.address);
  
    const [balance] = deployer.getBalance();

}

main()
.then(()=>{process.exit(0)})
.catch((err)=>{
    console.log(err);
    process.exit(1);

})