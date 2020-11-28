import moment from "moment";

export const formatCommentDate = (commentDate) => {
  if (!(commentDate instanceof Date)) {
    commentDate = new Date(commentDate);
  }

  return moment(commentDate).format(`MMMM YYYY`);
};
