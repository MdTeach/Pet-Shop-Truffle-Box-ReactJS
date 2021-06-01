import {PetInfo} from './PetInfo';
interface Props {
  petInfo: PetInfo;
  ownerInfo: String;
  handleAdopt: any;
}

const PetTemplate = ({petInfo, ownerInfo, handleAdopt}: Props) => {
  const _handleAdopt = (id: number) => {
    handleAdopt(id);
  };

  return (
    <div id="petTemplate" style={{display: 'block'}}>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="panel panel-default panel-pet">
          <div className="panel-heading">
            <h3 className="panel-title">{petInfo.name}</h3>
          </div>
          <div className="panel-body">
            <img
              alt="140x140"
              data-src="holder.js/140x140"
              className="img-rounded img-center"
              style={{width: '100%'}}
              src={petInfo.picture}
              data-holder-rendered="true"
            />
            <br />
            <br />
            <strong>Breed</strong>:{' '}
            <span className="pet-breed">{petInfo.breed}</span>
            <br />
            <strong>Age</strong>: <span className="pet-age">{petInfo.age}</span>
            <br />
            <strong>Owner</strong>:
            <span className="pet-age">{ownerInfo.substring(0, 10)}</span>
            <br />
            <strong>Location</strong>:{' '}
            <span className="pet-location">{petInfo.location}</span>
            <br />
            <br />
            {ownerInfo === '0x0000000000000000000000000000000000000000' ? (
              <button
                className="btn btn-default btn-adopt"
                type="button"
                onClick={() => {
                  _handleAdopt(petInfo.id);
                }}
                data-id="0">
                Adopt
              </button>
            ) : (
              <button
                className="btn btn-default btn-adopt"
                type="button"
                disabled
                onClick={() => {
                  _handleAdopt(petInfo.id);
                }}
                data-id="0">
                Adopt
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetTemplate;
