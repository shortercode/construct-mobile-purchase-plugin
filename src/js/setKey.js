store.setKey = function (publicKey) {
	if (store.inappbilling)
		store.inappbilling.setPublicKey(() => {
			store.log.debug("Key set: " + publicKey);
		}, publicKey);
};