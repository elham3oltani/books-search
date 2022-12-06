const IsInCart=(state,id)=>{
    const result=!!state.selectedFavorite.find(item=>item.id===id)
    return result

}

const AvailableInCart=(states,id)=>{
    const result=!!states.selectedItems.find(item=>item.id===id)
    return result

}

const quantityCount=(state,id)=>{
    const index=state.selectedFavorite.findIndex(item=>item.id===id);
    if(index === -1){
    return false
    }
    else{
        return state.selectedFavorite[index].quantity
    
    }
    }

    const removeSpace=(text)=>{
        const remSpace=text.trim()
        return remSpace
    }
    

export {IsInCart,quantityCount,AvailableInCart ,removeSpace}