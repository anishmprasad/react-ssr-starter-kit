const createActionWithTypeAndPayload = (type, payload, meta, error) => ({
	type,
	payload,
	meta,
	error
});
export default createActionWithTypeAndPayload;
