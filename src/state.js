const namespace =  require('./namespace');

async function setState(token, { drawnId, reach }) {
  await token.document.setFlag(namespace, 'drawnId', drawnId);
  await token.document.setFlag(namespace, 'reach', reach);
}

function getState(token) {
  const drawnId = token.document.getFlag(namespace, 'drawnId');
  const reach = token.document.getFlag(namespace, 'reach') || 0;
  return { drawnId, reach };
}

async function clearState(token) {
  await token.document.unsetFlag(namespace, 'drawnId');
  await token.document.unsetFlag(namespace, 'reach');
}

module.exports = {
  setState,
  getState,
  clearState,
};