public class test_size extends string_test {
    public String what;
    public test_size(String what) {
        super();
        (this).what = what;
    }
    public test_size does(Integer expected) {
        Integer actual = (this.what).length();
        String op = (("'") + (this.what)) + ("'.size()");
        (this).check(Integer.toString(actual), Integer.toString(expected), op, "");
        return this;
    }
}