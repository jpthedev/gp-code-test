import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

class EmpDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          heading: 'this is emp details'
      }
  }

  render() {
      const {isLoading, empData} = this.props;
      return (
        <div className='details-wrapper'>
          { isLoading &&
          <Stack>
            <Spinner size={SpinnerSize.small} />
          </Stack>
          }
          { !isLoading && empData &&
            <section>
              <Image
                src= {empData.avatar}
                alt= {empData.first_name}
              />
              <p>
                <span>ID: {empData.id}</span>
                <span>Name: {empData.first_name} {empData.last_name}</span>
              </p>
            </section>
          }
        </div>
      );
  }

}

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(EmpDetails);
