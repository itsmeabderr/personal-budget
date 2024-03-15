const envelopes = [];

function createEnvelop(id, title, budget) {
  return {
    id: Number(id),
    title,
    budget: Number(budget),
  };
}

module.exports = { envelopes, createEnvelop };
