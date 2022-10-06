const createElt = (type, attribute) => {
    return (parent, cssclass) => {
        let elem = document.createElement(type);
        if (type === 'input') {
            elem.setAttribute('type', attribute);
            // let randID = Math.trunc(Math.random() * Date.now());
            // elem.setAttribute('id', randID);
        }
        parent.appendChild(elem);
        elem.classList.add(cssclass);
        return elem
    }
}

const getCoord = (elem) => {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top,
        left: box.left,
        right: box.right,
        bottom: box.bottom
    };
}
const createDiv = createElt('div');
const createCheckBox = createElt('input', 'checkbox');
const createRadio = createElt('input', 'radio');
const createButton = createElt('input', 'button');
const createInput = createElt('input', 'text');
const createSpan = createElt('span');
const createLabel = createElt('label');
const createFieldSet = createElt('fieldset');
const createLegend = createElt('legend');
const createTextarea = createElt('textarea');

const fullChkBoxCreate = (parent, enable, label) => {
    const chkWrap = createDiv(parent, 'checkbox_wrapper');
    const chkBox = createCheckBox(chkWrap, 'check_box');
    chkBox.setAttribute('name', 'chkbox');
    if (enable === false) { chkBox.setAttribute('disabled', 'disabled'); }
    else {
        let randID = Math.trunc(Math.random() * Date.now());
        chkWrap.setAttribute('id', randID);

        chkWrap.classList.add('ui-widget-content');
        chkWrap.classList.add('ui-draggable');
        chkWrap.classList.add('ui-draggable-handle');
        $(function () {
            $('#' + chkWrap.id).draggable({ containment: "parent", grid: [20, 20] });
        });
        $(function () {
            $('#' + chkWrap.id).resizable({
                containment: "parent"
            });
        });
    }
    const labelForChkProto = createLabel(chkWrap, 'label_chkbox');
    labelForChkProto.for = 'chkbox';
    labelForChkProto.innerHTML = label;
}

const fullRadioGroupCreate = (parent, enable, radioQuantity, fieldsetName) => {
    const radioWrap = createDiv(parent, 'radio_wrapper');
    const fieldset = createFieldSet(radioWrap, 'radio_fieldset');
    const legend = createLegend(fieldset, 'legend_radio');
    legend.innerHTML = fieldsetName;
    for (let i = 0; i < radioQuantity; i++) {
        let radio = createRadio(fieldset, 'radio_box');
        radio.setAttribute('name', 'radiobox');
        const labelForRadio = createLabel(fieldset, 'label_radio');
        labelForRadio.for = 'radiobox';
        labelForRadio.innerHTML = 'Choice №' + (i + 1);
        if (enable === false) { radio.setAttribute('disabled', 'disabled') }
        else {
            let randID = Math.trunc(Math.random() * Date.now());
            radioWrap.setAttribute('id', randID);

            radioWrap.classList.add('ui-widget-content');
            radioWrap.classList.add('ui-draggable');
            radioWrap.classList.add('ui-draggable-handle');
            $(function () {
                $('#' + radioWrap.id).draggable({ containment: "parent", grid: [20, 20] });
            });
            $(function () {
                $('#' + radioWrap.id).resizable({
                    containment: "parent"
                });
            });
        }
    }

}

const fullInputCreate = (parent, enable, label) => {
    const inputWrap = createDiv(parent, 'input_wrapper');
    const input_box = createInput(inputWrap, 'input_box');
    input_box.setAttribute('name', 'inputbox');
    if (enable === false) { input_box.setAttribute('disabled', 'disabled'); }
    else {
        let randID = Math.trunc(Math.random() * Date.now());
        inputWrap.setAttribute('id', randID);

        inputWrap.classList.add('ui-widget-content');
        inputWrap.classList.add('ui-draggable');
        inputWrap.classList.add('ui-draggable-handle');
        $(function () {
            $('#' + inputWrap.id).draggable({ containment: "parent", grid: [20, 20] });
        });
        $(function () {
            $('#' + inputWrap.id).resizable({
                containment: "parent"
            });
        });
    }
    const labelForInput = createLabel(inputWrap, 'label_inputbox');
    labelForInput.for = 'inputbox';
    labelForInput.innerHTML = label;
}

const fullTextareaCreate = (parent, enable, label) => {
    const textareaWrap = createDiv(parent, 'textarea_wrapper');
    const textarea_box = createTextarea(textareaWrap, 'textarea_box');
    textarea_box.setAttribute('name', 'textareabox');
    if (enable === false) {
        textarea_box.setAttribute('disabled', 'disabled');
        textarea_box.setAttribute('style', 'resize:none');
    }
    else {
        let randID = Math.trunc(Math.random() * Date.now());
        textareaWrap.setAttribute('id', randID);

        textareaWrap.classList.add('ui-widget-content');
        textareaWrap.classList.add('ui-draggable');
        textareaWrap.classList.add('ui-draggable-handle');
        $(function () {
            $('#' + textareaWrap.id).draggable({ containment: "parent", grid: [20, 20] });
        });
        // $(function () {
        //     $('#'+chkWrap.id).resizable({
        //         containment: "parent"
        //     });
        // });
    }
    const labelForTextarea = createLabel(textareaWrap, 'label_textareabox');
    labelForTextarea.for = 'textareabox';
    labelForTextarea.innerHTML = label;
}
const fullDivCreate = (parent, enable, label) => {
    const divWrap = createDiv(parent, 'div_wrapper');
    const div_box = createDiv(divWrap, 'div_box');
    // textarea_box.setAttribute('name', 'textareabox');
    if (enable === false) {
        div_box.setAttribute('disabled', 'disabled');
    }
    else {
        let randID = Math.trunc(Math.random() * Date.now());
        divWrap.setAttribute('id', randID);

        divWrap.classList.add('ui-widget-content');
        divWrap.classList.add('ui-draggable');
        divWrap.classList.add('ui-draggable-handle');
        $(function () {
            $('#' + divWrap.id).draggable({ containment: "parent", grid: [20, 20] });
        });
        $(function () {
            $('#' + divWrap.id).resizable({
                containment: "parent"
            });
        });
    }
    const labelFordiv = createLabel(divWrap, 'label_divbox');
    labelFordiv.for = 'div_box';
    labelFordiv.innerHTML = label;
}
const firstParent = document.body;
const comContainer = createDiv(firstParent, 'com_container');

const vaultContainer = createDiv(comContainer, 'vault_container');
fullChkBoxCreate(vaultContainer, false, ' Образец, ClickMe!!!');
fullRadioGroupCreate(vaultContainer, false, 3, 'Образец!!! кликни чтобы добавить');
fullInputCreate(vaultContainer, false, 'Образец input. Кликни, чтобы добавить');
fullTextareaCreate(vaultContainer, false, 'Образец textarea. Кликни, чтобы добавить');
fullDivCreate(vaultContainer, false, 'Образец div. Кликни, чтобы добавить')
let count = {
    chkbox_count: 1,
    radio_count: 1,
    input_count: 1,
    textarea_count: 1,
    divarea_count: 1,
}

vaultContainer.addEventListener('click', function (evt) {
    if (evt.target.parentNode.classList.contains('checkbox_wrapper') || evt.target.classList.contains('checkbox_wrapper')) {
        fullChkBoxCreate(formContainer, true, 'Чекбокс №' + count.chkbox_count);
        count.chkbox_count++;
    }
    if (evt.target.parentNode.classList.contains('radio_wrapper') || evt.target.classList.contains('radio_wrapper') || +
        evt.target.parentNode.parentNode.classList.contains('radio_wrapper')) {
        let quantity = +prompt('Введите количество кнопок в группе');
        fullRadioGroupCreate(formContainer, true, quantity, 'ГруппаРадио №' + count.radio_count);
        count.radio_count++;
    }
    if (evt.target.parentNode.classList.contains('input_wrapper') || evt.target.classList.contains('input_wrapper')) {
        fullInputCreate(formContainer, true, 'Инпут №' + count.input_count);
        count.input_count++;
    }
    if (evt.target.parentNode.classList.contains('textarea_wrapper') || evt.target.classList.contains('textarea_wrapper')) {
        fullTextareaCreate(formContainer, true, 'Текстовое поле №' + count.textarea_count);
        count.textarea_count++;
    }
    if (evt.target.parentNode.classList.contains('div_wrapper') || evt.target.classList.contains('div_wrapper')) {
        fullDivCreate(formContainer, true, 'Div №' + count.divarea_count);
        count.divarea_count++;
    }

})

const formContainer = createDiv(comContainer, 'form_container');
const inputsInfo = createDiv(comContainer, 'inputs_info');

const contCoord = getCoord(formContainer);

formContainer.addEventListener('mouseup', (evt) => {
    let eventCoord = getCoord(evt.target);
    let event_ParentCoord = getCoord(evt.target.parentNode);
    let event_2ParentCoord = getCoord(evt.target.parentNode.parentNode)

    if (evt.target.classList.contains('checkbox_wrapper') || +
        evt.target.classList.contains('radio_wrapper') || +
        evt.target.classList.contains('input_wrapper') || +
        evt.target.classList.contains('textarea_wrapper') || +
        evt.target.classList.contains('div_wrapper')) {
        inputsInfo.innerHTML = '';

        const spanID = createSpan(inputsInfo, 'spanID');
        if (evt.target.classList.contains('radio_wrapper')) {
            spanID.innerHTML = evt.target.querySelector("legend").innerHTML + ' id: ' + evt.target.id;
        }
        else {
            spanID.innerHTML = evt.target.querySelector("label").innerHTML + ' id: ' + evt.target.id;
        }
        const spanLocation = createSpan(inputsInfo, 'spanLocation');
        spanLocation.innerHTML = `X:   ${eventCoord.left - contCoord.left}, 
        Y:   ${eventCoord.top - contCoord.top}`;

        const spanSizes = createSpan(inputsInfo, 'spanSizes')
        spanSizes.innerHTML = `Ширина: ${eventCoord.right - eventCoord.left},  
        Высота: ${eventCoord.bottom - eventCoord.top}`;
        console.log(evt.target);
    }
    if (evt.target.parentNode.classList.contains('checkbox_wrapper') || +
        evt.target.parentNode.classList.contains('radio_wrapper') || +
        evt.target.parentNode.classList.contains('input_wrapper') || +
        evt.target.parentNode.classList.contains('textarea_wrapper') || +
        evt.target.parentNode.classList.contains('div_wrapper')) {
        inputsInfo.innerHTML = '';

        const spanID = createSpan(inputsInfo, 'spanID');
        if (evt.target.parentNode.classList.contains('radio_wrapper')) {
            spanID.innerHTML = evt.target.querySelector("legend").innerHTML + ' id: ' + evt.target.parentNode.id;
        }
        else {
            spanID.innerHTML = evt.target.parentNode.querySelector("label").innerHTML + ' id: ' + evt.target.parentNode.id;
        }
        const spanLocation = createSpan(inputsInfo, 'spanLocation');
        spanLocation.innerHTML = `X: ${event_ParentCoord.left - contCoord.left},
         Y: ${event_ParentCoord.top - contCoord.top}`;

        const spanSizes = createSpan(inputsInfo, 'spanSizes')
        spanSizes.innerHTML = `Ширина: ${event_ParentCoord.right - event_ParentCoord.left},
        Высота: ${event_ParentCoord.bottom - event_ParentCoord.top}`;
        console.log(evt.target)
    }
    if(evt.target.parentNode.parentNode.classList.contains('radio_wrapper')){
        inputsInfo.innerHTML = '';

        const spanID = createSpan(inputsInfo, 'spanID');
        spanID.innerHTML = evt.target.parentNode.querySelector("legend").innerHTML + ' id: ' + evt.target.parentNode.parentNode.id;
        
        const spanLocation = createSpan(inputsInfo, 'spanLocation');
        spanLocation.innerHTML = `X: ${event_2ParentCoord.left - contCoord.left},
        Y: ${event_2ParentCoord.top - contCoord.top}`;
        
        const spanSizes = createSpan(inputsInfo, 'spanSizes')
        spanSizes.innerHTML = `Ширина: ${event_2ParentCoord.right - event_2ParentCoord.left},
        Высота: ${event_2ParentCoord.bottom - event_2ParentCoord.top}`;
        console.log(evt.target)
    }
    

})
