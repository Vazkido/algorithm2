for (let i = 1; i < Array.length; i++) {
    let element = array[i];
    j = i - 1;
    while (j >=0 & array[j] > element){
        array[j+1] = array[j]
        j = j - 1;
    }
    array[j + 1] = key;
    return array
}