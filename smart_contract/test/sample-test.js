const {expect} = require('chai');
const {ethers} = require('hardhat');
describe("Swords",function (){
it('Should mint and transfer',async function(){
  const Swords = await ethers.getContractFactory('Swords');
  const swords = await Swords.deploy()
  const walletAddress = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'
  let balance = await swords.balanceOf(walletAddress);
  expect(balance).to.equal(0);
  const newlyMintedToken = await swords.safeMint(walletAddress,{value:ethers.utils.parseEther('0.05')});
})

})