package com.codeforgeyt.onetomanywebservice.model.exception;

import java.text.MessageFormat;

public class NoteIsAlreadyAssignedException extends RuntimeException{
    public NoteIsAlreadyAssignedException(final Long itemId, final Long cartId){
        super(MessageFormat.format("Item: {0} is already assigned to cart: {1}", itemId, cartId));
    }
}
