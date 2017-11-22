package net.bqc.jsdf.core.model;

import java.util.Objects;

public class Variable {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Variable))
            return false;
        return this.name != null && this.name.equals(((Variable) obj).name);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }
}
