const hre = require("hardhat");

async function main() {
  const CNDV2Test = await hre.ethers.getContractFactory("ClonesNeverDieV2Test");
  const cndv2test = await CNDV2Test.deploy("0x73ebB6b90C38088263C8bBC8C7ea7A2806980cBC", "0x547C04B3435d7C64c09cBE8A53c1B132eF0fBF60", "testuri/");

  await cndv2test.deployed();

  console.log("CNDV2Test deployed to:", cndv2test.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
