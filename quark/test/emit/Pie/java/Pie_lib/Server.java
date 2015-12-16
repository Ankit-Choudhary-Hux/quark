package Pie_lib;

/* BEGIN_BUILTIN */

public class Server<T> implements io.datawire.quark.runtime.HTTPServlet, io.datawire.quark.runtime.QObject {
    public io.datawire.quark.runtime.Runtime runtime;
    public T impl;
    public Server(io.datawire.quark.runtime.Runtime runtime, T impl) {
        (this).runtime = runtime;
        (this).impl = impl;
    }
    public io.datawire.quark.runtime.Runtime getRuntime() {
        return (this).runtime;
    }
    public void onHTTPRequest(io.datawire.quark.runtime.HTTPRequest request, io.datawire.quark.runtime.HTTPResponse response) {
        io.datawire.quark.runtime.JSONObject envelope = io.datawire.quark.runtime.JSONObject.parse((request).getBody());
        String method = ((envelope).getObjectItem("$method")).getString();
        io.datawire.quark.runtime.JSONObject json = (envelope).getObjectItem("rpc");
        Object argument = Functions.fromJSON(new Class(((json).getObjectItem("$class")).getString()), json);
        Object result = (((new Class(io.datawire.quark.runtime.Builtins._getClass(this))).getField("impl")).type).invoke(this.impl, method, new java.util.ArrayList(java.util.Arrays.asList(new Object[]{argument})));
        (response).setBody((Functions.toJSON(result)).toString());
        (response).setCode(200);
        (this.getRuntime()).respond(request, response);
    }
    public void onServletError(String url, String message) {
        do{System.out.println(((("RPC Server failed to register ") + (url)) + (" due to: ")) + (message));System.out.flush();}while(false);
    }
    public String _getClass() {
        return "Server<Object>";
    }
    public Object _getField(String name) {
        if ((name)==("runtime") || ((name) != null && (name).equals("runtime"))) {
            return (this).runtime;
        }
        if ((name)==("impl") || ((name) != null && (name).equals("impl"))) {
            return (this).impl;
        }
        return null;
    }
    public void _setField(String name, Object value) {
        if ((name)==("runtime") || ((name) != null && (name).equals("runtime"))) {
            (this).runtime = (io.datawire.quark.runtime.Runtime) (value);
        }
        if ((name)==("impl") || ((name) != null && (name).equals("impl"))) {
            (this).impl = (T) (value);
        }
    }
    /**
     * called after the servlet is successfully installed. The url will be the actual url used, important especially if ephemeral port was requested
     */
    public void onServletInit(String url, io.datawire.quark.runtime.Runtime runtime) {}
    /**
     * called when the servlet is removed
     */
    public void onServletEnd(String url) {}
}
/* END_BUILTIN */