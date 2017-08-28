import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';

import { fetchSingleCheckin, createCheckin, fetchAllCheckins, updateCheckin, deleteCheckin }
from '../../actions/checkin_actions';

import { selectAllCheckins, selectSingleCheckin } from '../../reducers/selectors';
