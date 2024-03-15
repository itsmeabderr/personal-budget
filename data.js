const envelopes = [
  {
    id: 1,
    title: "food",
    budget: 200,
  },
  {
    id: 2,
    title: "rent",
    budget: 500,
  },
  {
    id: 3,
    title: "tech",
    budget: 2000,
  },
];

function createEnvelop(id, title, budget) {
  return {
    id: Number(id),
    title,
    budget: Number(budget),
  };
}

function getEnvelope(id) {
  const envelope = envelopes.filter((envelope) => id === envelope.id);
  return envelope;
}

module.exports = { envelopes, createEnvelop, getEnvelope };
