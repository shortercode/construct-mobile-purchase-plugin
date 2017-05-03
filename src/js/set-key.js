store.setKey = function (publicKey) {
	if (store.inappbilling)
		store.inappbilling.setPublicKey(function () {
			store.log.debug("Key set: " + publicKey);
		}, publicKey);
};
