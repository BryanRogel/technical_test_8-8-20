    const string = (rule, value, callback) => {
        try {
        const letters = 'abcdefghijklmnñopqrstuvwxyzáéíóú& '
        let message = null;
        if (value) {
            for (let i = 0; i < value.length; i += 1) {
                if (letters.toLowerCase().indexOf(value.toLowerCase().charAt(i), 0) === -1) {
                message = "Solo se admite texto";
                }
            }
        }
        callback(message)
        } catch (error) {
        callback();
        }
    }

    const noPermit = (rule, value, callback) => {
        try {
        const blackList = " / ; ` ' - * / > < ? ";
        let containBlackList = false;
        // valida que no esten estos caracteres
        for (let i = 0; i < value.length; i += 1) {
            if (blackList.indexOf(value.charAt(i), 0) !== -1) {
            containBlackList = true;
            }
        }
        if (containBlackList) {
            callback(`Los siguientes caracteres no son permitidos. ${blackList}`);
        } else {
            callback();
        }
        } catch (error) {
        callback();
        }
    }

    const number = (rule, value, callback) => {
        try {
            const letters = '0123456789.,'
            let message = null;
            if (value) {
                for (let i = 0; i < value.length; i += 1) {
                    if (letters.toLowerCase().indexOf(value.toLowerCase().charAt(i), 0) === -1) {
                    message = "Solo se admiten números";
                    }
                }
            }
            callback(message)
        } catch (error) {
            callback();
        }
    }

    const onlyOnePoint = (rule, value, callback) => {
        try {
            let points = 0;
            let message = null;
            if (value) {
                for (let i = 0; i < value.length; i += 1) {
                    console.log('object', points, value.charAt(i))
                    points = points + 1; 
                    if (value.charAt(i) === '.' && points > 1) {
                    message = "Solo se admite un punto";
                    }
                }
            }
            callback(message)
        } catch (error) {
            callback();
        }
    }

    const minCharacter8 = (rule, value, callback) => {
        try {
            let messager = null;
            if (value.length < 8 && value.length !== 0) {
            messager = "8 caracteres mínimo";
            }
            callback(messager);
        } catch (error) {
            callback();
        }
    };

    const character9 = (rule, value, callback) => {
        try {
            let messager = null;
            if (value.length !== 9) {
            messager = "Debe contener 9 caracteres ";
            }
            callback(messager);
        } catch (error) {
            callback();
        }
    };

    const maxCharacter9 = (rule, value, callback) => {
        try {
            let messager = null;
            if (value.length > 9 && value.length !== 0) {
            messager = "9 caracteres máximos";
            }
            callback(messager);
        } catch (error) {
            callback();
        }
    };

    const charactersPermited = (rule, value, callback) => {
        const permits = "abcdefghijklmnñopqrstuvwxyzáéíóú 0123456789!#$%&+,.:=@^_|-";
        let message = null;
        try {
            if (value) {
                for (let i = 0; i < value.length; i += 1) {
                    if (
                    permits.toLowerCase().indexOf(value.toLowerCase().charAt(i), 0) === -1
                    ) {
                    message = "Ingresó un caracter no permitido";
                    }
                }    
            }
            callback(message);
        } catch (error) {
            callback();
        }
    };


    const alphanumeric = (rule, value, callback) => {
        const permits = "abcdefghijklmnñopqrstuvwxyzáéíóú 0123456789";
        let message = null;
        try {
            if (value) {
                for (let i = 0; i < value.length; i += 1) {
                    if (
                    permits.toLowerCase().indexOf(value.toLowerCase().charAt(i), 0) === -1
                    ) {
                    message = "Ingresó un caracter no permitido";
                    }
                }    
            }
            callback(message);
        } catch (error) {
            callback();
        }
    };

    const whitespace = (rule, value, callback) => {
        // valida que solo hayan caractres alphanumericos permitidos
        const permits = " ";
        let message = null;
        try {
            if (value) {
                for (let i = 0; i < value.length; i += 1) {
                    if (
                    permits.toLowerCase().indexOf(value.toLowerCase().charAt(i), 0) !== -1
                    ) {
                    message = "No se admiten espacios";
                    }
                }    
            }
            callback(message);
        } catch (error) {
            callback();
        }
    };

    const alphanumericPass = (rule, value, callback) => {
        if (value) {
        const numeros = '0123456789';
        const letras = 'abcdefghijklmnñopqrstuvwxyz';
        const specialChart = '!#$%&+,.:=@^_|"';
        let containNumber = false;
        let containLowerCase = false;
        let containUpperCase = false;
        let containSpecial = false;
        let message;
    
        for (let i = 0; i < value.length; i += 1) {
            if (numeros.indexOf(value.charAt(i), 0) !== -1) {
            containNumber = true;
            }
        }
    
        for (let i = 0; i < value.length; i += 1) {
            if (letras.toLowerCase().indexOf(value.charAt(i), 0) !== -1) {
            containLowerCase = true;
            }
        }
    
        for (let i = 0; i < value.length; i += 1) {
            if (letras.toUpperCase().indexOf(value.charAt(i), 0) !== -1) {
            containUpperCase = true;
            }
        }
    
        for (let i = 0; i < value.length; i += 1) {
            if (specialChart.indexOf(value.charAt(i), 0) !== -1) {
            containSpecial = true;
            }
        }
    
        if (!containNumber || !containLowerCase || !containUpperCase || !containSpecial) {
            message = 'La contraseña debe contener ';
            if (!containNumber) {
            message = `${message} números`;
            }
            if (!containLowerCase) {
            if (containUpperCase && containSpecial && !containNumber) {
                message = `${message} y`;
            } else if (!containNumber) {
                message = `${message},`;
            }
            message = `${message} minúsculas`;
            }
            if (!containUpperCase) {
            if (containSpecial && (!containNumber || !containLowerCase)) {
                message = `${message} y`;
            } else {
                if (!containLowerCase || !containNumber) {
                message = `${message},`;
                }
                message = `${message} mayúsculas`;
            }
            }
            if (!containSpecial) {
            if (!containNumber || !containLowerCase || !containUpperCase) {
                message = `${message} y`;
            }
            message = `${message} caracteres especiales`;
            }
            callback(message);
        } else {
            callback();
        }
        } else {
        callback();
        }
    };


export {
    string,
    number,
    minCharacter8,
    character9,
    maxCharacter9,
    charactersPermited,
    alphanumeric,
    alphanumericPass,
    whitespace,
    noPermit,
    onlyOnePoint
};