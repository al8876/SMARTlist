
$(document).ready(function() {

  // ENTER KEY SUBMITS ADD ITEM
  $('#comment').keypress(function (e) {
    if(e.keyCode == 13){
      $('#addButton').click();
    }
  });

  // POPULATE MODAL HEADER WITH LIST ITEM
  $('.modalOpen').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      let data = JSON.parse(evt.target.dataset.itemInfo);
      console.log(data);
      $('.modal-title').text(data.title);
    }
  });
// adding a line to
  // WATCH MODAL DELETE BUTTON
  $('#watchDeleteButton').on('click', function(evt){
    let itemID = $('#watchModal').children().find('#watchModalTitle').text();

    // MENTOR HELP HERE! Why do I keep getting my title 5 times? Not having to repeat each modal would be 100x better
    // let itemID = $('.modal-title').text();

    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // READ MODAL DELETE BUTTON
  $('#readDeleteButton').on('click', function(evt){
    let itemID = $('#readModal').children().find('#readModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // eat MODAL DELETE BUTTON
  $('#eatDeleteButton').on('click', function(evt){
    let itemID = $('#eatModal').children().find('#eatModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // BUY MODAL DELETE BUTTON
  $('#buyDeleteButton').on('click', function(evt){
    let itemID = $('#buyModal').children().find('#buyModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // OTHER MODAL DELETE BUTTON
  $('#otherDeleteButton').on('click', function(evt){
    let itemID = $('#otherModal').children().find('#otherModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

// Function to update items from database VIA modal using AJAX
// WATCH MODAL CHANGE CATEGORY
  const saveWatchButton = $('#watchModal').children().find('.btn-primary');
  $(saveWatchButton).on('click', function(evt){
    // console.log(saveButton);
    const completeButton = $('#selWatchDone').val();
    const selectButton = $('#selWatchCategory').val();
    console.log('selectbuttonoption', selectButton);
    const itemID = $('#watchModal').children().find('#watchModalTitle').text();
    const datum = {
      category_id: selectButton,
      itemID: itemID,
      completed: completeButton
    };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      data: {
        datum: datum
      },
      success: function(data) {
        console.log('AJAX request returned');
        // do stuff with the success data
      },
      error: function(err) {
        console.log('AJAX request failed');
        console.log(err);
      }
    });
    location.reload();
  });

// READ MODAL CHANGE CATEGORY
  const saveReadButton = $('#readModal').children().find('.btn-primary');
  $(saveReadButton).on('click', function(evt){
    // console.log(saveButton);
    const completeButton = $('#selReadDone').val();
    const selectButton = $('#selReadCategory').val();
    console.log('selectbuttonoption', selectButton);
    const itemID = $('#readModal').children().find('#readModalTitle').text();
    const datum = {
      category_id: selectButton,
      itemID: itemID,
      completed: completeButton
    };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      data: {
        datum: datum
      },
      success: function(data) {
        console.log('AJAX request returned');
        // do stuff with the success data
      },
      error: function(err) {
        console.log('AJAX request failed');
        console.log(err);
      }
    });
    // .done(function (tweet) {
    //   console.log('Success :', tweet);
    location.reload();
  });

// EAT MODAL CHANGE CATEGORY
  const saveEatButton = $('#eatModal').children().find('.btn-primary');
  $(saveEatButton).on('click', function(evt){
    // console.log('Savebutton', saveButton);
    const completeButton = $('#selEatDone').val();
    const selectButton = $('#selEatCategory').val();
    console.log('Select button', selectButton);
    console.log('selectbuttonoption', selectButton);
    const itemID = $('#eatModal').children().find('#eatModalTitle').text();
    console.log('Item ID', itemID);
    const datum = {
      category_id: selectButton,
      itemID: itemID,
      completed: completeButton
    };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      data: {
        datum: datum
      },
      success: function(data) {
        console.log('AJAX request returned');
        // do stuff with the success data
      },
      error: function(err) {
        console.log('AJAX request failed');
        console.log(err);
      }
    });
    // .done(function (tweet) {
    //   console.log('Success :', tweet);
  location.reload();
  });

// BUY MODAL CHANGE CATEGORY
  const saveBuyButton = $('#buyModal').children().find('.btn-primary');
  $(saveBuyButton).on('click', function(evt){
    // console.log(saveButton);
    const completeButton = $('#selBuyDone').val();
    const selectButton = $('#selBuyCategory').val();
    console.log('selectbuttonoption', selectButton);
    const itemID = $('#buyModal').children().find('#buyModalTitle').text();
    const datum = {
      category_id: selectButton,
      itemID: itemID,
      completed: completeButton
    };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      data: {
        datum: datum
      },
      success: function(data) {
        console.log('AJAX request returned');
        // do stuff with the success data
      },
      error: function(err) {
        console.log('AJAX request failed');
        console.log(err);
      }
    });
    // .done(function (tweet) {
    //   console.log('Success :', tweet);
  location.reload();
  });



  const saveOtherButton = $('#otherModal').children().find('.btn-primary');
  $(saveOtherButton).on('click', function(evt){
    // console.log(saveButton);
    const completeButton = $('#selOtherDone').val();
    console.log(completeButton);
    const selectButton = $('#selOtherCategory').val();
    console.log('selectbuttonoption', selectButton);
    const itemID = $('#otherModal').children().find('#otherModalTitle').text();
    const datum = {
      category_id: selectButton,
      itemID: itemID,
      completed: completeButton
    };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      data: {
        datum: datum
      },
      success: function(data) {
        console.log('AJAX request returned');
        // do stuff with the success data
      },
      error: function(err) {
        console.log('AJAX request failed');
        console.log(err);
      }
    });
    // .done(function (tweet) {
    //   console.log('Success :', tweet);
    location.reload();
  });

});

