

export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || maxLength < value.length) {
        return false
    }

    return true
}

export const validateStringOfNumbers = (value: unknown, maxLength: number) => {
     const regex = /^[0-9]+$/;

    if (!value || typeof value !== 'string' || maxLength < value.length || !regex.test(value)) {
        return false;
    }

    return true; 

}

export const getErrorMessage = (error: unknown) => {

    let message: string;

     if (error instanceof Error) {
            message = error.message
        }
        else if (error && typeof error === 'object' && 'message' in error) {
            message = String(error.message)
        }
        else if(typeof error === 'string'){
            message = error
        }
        else{
            message = 'Something went wrong'
        }

        return message
}