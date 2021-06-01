import {useEffect, useState} from 'react';
import useWeb3 from './hooks/web3';

import {Contract} from 'web3-eth-contract';
import {AbiItem} from 'web3-utils';

import AdoptionContractJSON from './contracts_deployed/Adoption.json';
import Layout from './components/Layout';

function App() {
  const {isLoading, isWeb3, web3, accounts} = useWeb3();
  const [instance, setInstance] = useState<Contract>();
  const [isFetching, setIsFetching] = useState(true);
  const [owners, setOwners] = useState<String[]>([]);

  const handleAdopt = async (id: number) => {
    const txn = instance?.methods.adopt(id).send({from: accounts[0]});
    console.log(txn);

    const owners_list = await instance?.methods
      .getAdopters()
      .call({from: accounts[0]});

    setIsFetching(true);
    setOwners(owners_list);
    setIsFetching(false);
  };

  useEffect(() => {
    (async () => {
      if (web3 !== null) {
        // const networkId = await web3.eth.net.getId();
        const abi = AdoptionContractJSON.abi as AbiItem[];
        const contract_instance = new web3.eth.Contract(
          abi,
          '0x037614575D85960Fb4F39a973054B8Dc34dDDDBc',
        );

        const owners_list = await contract_instance.methods
          .getAdopters()
          .call({from: accounts[0]});

        setOwners(owners_list);
        setInstance(contract_instance);
        setIsFetching(false);
      }
    })();
  }, [isLoading, isWeb3, owners]);

  if (isLoading || isFetching) {
    return <h1>Loading ..</h1>;
  }
  return (
    <>
      <Layout ownersInfo={owners} handleAdopt={handleAdopt} />
    </>
  );
}

export default App;
