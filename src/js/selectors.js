export const metadataSelector = state => {
    return {metadata: state.notebook.get('metadata')};
};

export const contentSelector = state => {
    return {
        content: state.notebook.get('content').map(
            num => state.notebook.getIn(['blocks', String(num)])
        )
    };
};