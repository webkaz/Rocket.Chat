Meteor.methods({
	'livechat:removeTrigger'(/*trigger*/) {
		if (!Meteor.userId() || !RocketChat.authz.hasPermission(Meteor.userId(), 'view-livechat-manager')) {
			throw new Meteor.Error('not-authorized');
		}

		return RocketChat.models.LivechatTrigger.removeAll();
	}
});
