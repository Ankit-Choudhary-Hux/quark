package slack.event;

/**
 * Base class for all slack events.
 */
public class SlackEvent implements io.datawire.quark.runtime.QObject {
    public static quark.reflect.Class slack_event_SlackEvent_ref = slackpack_md.Root.slack_event_SlackEvent_md;
    /**
     * The event type.
     */
    public String type;
    /**
     * The user associated with the event.
     */
    public slack.User user;
    /**
     * The channel associated with the event.
     */
    public slack.Channel channel;
    /**
     * The timestamp associated with the event.
     */
    public String timestamp;
    public SlackEvent() {}
    public void load(slack.Client client, io.datawire.quark.runtime.JSONObject obj) {}
    public void dispatch(slack.SlackHandler handler) {}
    public String _getClass() {
        return "slack.event.SlackEvent";
    }
    public Object _getField(String name) {
        if ((name)==("type") || ((Object)(name) != null && ((Object) (name)).equals("type"))) {
            return (this).type;
        }
        if ((name)==("user") || ((Object)(name) != null && ((Object) (name)).equals("user"))) {
            return (this).user;
        }
        if ((name)==("channel") || ((Object)(name) != null && ((Object) (name)).equals("channel"))) {
            return (this).channel;
        }
        if ((name)==("timestamp") || ((Object)(name) != null && ((Object) (name)).equals("timestamp"))) {
            return (this).timestamp;
        }
        return null;
    }
    public void _setField(String name, Object value) {
        if ((name)==("type") || ((Object)(name) != null && ((Object) (name)).equals("type"))) {
            (this).type = (String) (value);
        }
        if ((name)==("user") || ((Object)(name) != null && ((Object) (name)).equals("user"))) {
            (this).user = (slack.User) (value);
        }
        if ((name)==("channel") || ((Object)(name) != null && ((Object) (name)).equals("channel"))) {
            (this).channel = (slack.Channel) (value);
        }
        if ((name)==("timestamp") || ((Object)(name) != null && ((Object) (name)).equals("timestamp"))) {
            (this).timestamp = (String) (value);
        }
    }
}
