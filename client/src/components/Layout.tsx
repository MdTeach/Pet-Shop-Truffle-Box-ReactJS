import PetTemplate from './PetTemplate';
import PetDatasJSON from '../assets/pets.json';
import {PetInfo} from './PetInfo';

interface Props {
  ownersInfo: String[];
  handleAdopt: any;
}
const Layout = ({ownersInfo, handleAdopt}: Props) => {
  const PetDatas: PetInfo[] = PetDatasJSON;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-push-2">
            <h1 className="text-center">Pete's Pet Shop</h1>
            <hr />
            <br />
          </div>
        </div>

        <div id="petsRow" className="row">
          {PetDatas.map((petInfo, idx) => (
            <PetTemplate
              key={idx}
              petInfo={petInfo}
              ownerInfo={ownersInfo[idx]}
              handleAdopt={handleAdopt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
