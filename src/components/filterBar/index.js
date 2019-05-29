import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getEmpInfo,
  changeDept,
  changeEmp,
  clearData
} from '../../actions';

class FilterBar extends React.Component {

    onSetFocus = () => {
      alert('working...');
    }

    _changeDept = (e, key) => {
      this.props.changeDept(key);
    }

    _changeEmp = (e, key) => {
      this.props.changeEmp(key);
    }

    _getOptions = (list) => {
      return list.map((item) => {
        return { 'text': item, 'key': item }
      });
    }

    render() {
      const {
        departmentText,
        empIdText,
        submitCta,
        clearCta
      } = this.props.comp.labels;
      const {
        getEmpInfo,
        empId,
        depKey,
        empList,
        clearData
      } = this.props;

      const getOptions = this._getOptions(empList);
        return (
          <header>
            <div className='department-wrapper'>
                <Dropdown 
                    placeholder={departmentText} 
                    label={departmentText}
                    options={[{'text': 'HR', 'key': 'HR'}, {'text': 'ENGINEERING', 'key': 'ENGINEERING'}]}
                    onChange={this._changeDept}
                    defaultSelectedKey={depKey}
                />
            </div>
            <div className='emp-wrapper'>
                <Dropdown 
                    placeholder={empIdText}
                    label={empIdText} 
                    options={getOptions} 
                    onChange={this._changeEmp}
                    defaultSelectedKey={empId}
                />
            </div>

            <PrimaryButton text={submitCta} onClick={getEmpInfo} />

            <PrimaryButton text={clearCta} onClick={clearData} />

          </header>
        );
    }

}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getEmpInfo,
      changeDept,
      changeEmp,
      clearData
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);