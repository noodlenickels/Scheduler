$('.select').each(function() {
    const _this = $(this);
    const selectOption = _this.find('option');
    const selectOptionLength = selectOption.length;
    const selectedOption = selectOption.filter(':selected');
    const duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select dimonSelect"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list').hide();

    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }
});

const $dimonSupaSelectors = $('#dimonSupaSelectors');

$dimonSupaSelectors.on('click', '.new-select', function(event) {
    const $this = $(this);
    const $selectList = $this.next('.new-select__list');

    $this.toggleClass('on');

    if (!$this.hasClass('on')) {
        $selectList.slideUp(450);
        return;
    }

    $selectList.slideDown(450);
});

$dimonSupaSelectors.on('click', '.new-select__item', function(event) {
    const $this = $(this);
    const $dimonSelect = $this.closest('.dimonSelect');
    const $selectHead = $dimonSelect.find('.new-select');
    const $select = $dimonSelect.find('select');

    let selectedValue = $this.attr('data-value');

    $select.val(selectedValue);

    $selectHead.html(selectedValue);

    globalVars.fillPageDimon($dimonSupaSelectors);
    $this.closest('.new-select__list').slideUp(450);

    $selectHead.removeClass('on');
});