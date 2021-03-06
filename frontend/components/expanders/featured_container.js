import { connect } from 'react-redux';
import { toggleModal, toggleMovieShow, toggleSeriesShow, updateCurrentShow } from "../../actions/ui_actions";
import { fetchSeriesEpisodes } from "../../actions/episode_actions";
import FeaturedExpander from "./featured";

const mDTP = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  toggleMovieShow: () => dispatch(toggleMovieShow()),
  toggleSeriesShow: () => dispatch(toggleSeriesShow()),
  updateCurrentShow: show => dispatch(updateCurrentShow(show)),
  fetchSeriesEpisodes: seriesId => dispatch(fetchSeriesEpisodes(seriesId))
});

export default connect(null, mDTP)(FeaturedExpander)