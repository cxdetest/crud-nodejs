const getData = (req, res) => {
  try {
    const { limit, offset } = req.query;
    if (limit && offset) {
      return {
        limit,
        offset,
      };
    } else {
      return { message: 'no parameters' };
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getData };
